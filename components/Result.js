import React from 'react';
import { useSelector } from 'react-redux';
import Skeleton from 'components/Skeleton';

const Result = () => {
  const state = useSelector((state) => state);

  if (state.loading) {
    return <Skeleton />;
  }

  if (state.notfound) {
    return <span className="result__init">No results found</span>;
  }

  if (!state.result.length) {
    return <span className="result__init">Start searching for meanings</span>;
  }

  return (
    <div className="result__wrapper">
      {state.result.map((res , key) => (
        <div key={key} className="result__container">
          <div className="container">
            <span className="container__title">{res.word}</span>
            <div className="phonetics__container">
              <span>Phonetics</span>
              <div>
                {res.phonetics.map((ph , key) => (
                  <audio key={key} controls>
                    <source src={ph.audio} />
                  </audio>
                ))}
              </div>
            </div>
            {res.meanings.map((mn , key) => (
              <div key={key} className="result__meanings">
                <div className="container">
                  <span className="result__title">Parts of speech</span>
                  <span className="result__meaning">{mn.partOfSpeech}</span>
                </div>
                {mn.definitions.map((df , key) => (
                  <div key={key} className="result__definations">
                    <div className="container">
                      <span className="border__min"></span>
                      <span className="result__title">Definition</span>
                      <span className="result__meaning">{df.definition}</span>
                    </div>
                    <div className="container">
                      <span className="result__title">Example</span>
                      <span className="result__meaning">{df.example}</span>
                    </div>
                    {df.synonyms && (
                      <div className="container">
                        <span className="result__title">Synonyms</span>
                        <div className="result__synonyms__map">
                          {df.synonyms.map((syn , key) => (
                            <span key={key}>{syn}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Result;
