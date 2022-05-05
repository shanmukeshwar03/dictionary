import React from "react";
import { useSelector } from "react-redux";
import Skeleton from "components/Skeleton";

const Defination = ({ title, meaning }) => {
  return (
    <div className="flex flex-col my-4">
      <span className="text-gray-800 text-lg font-medium">{title}</span>
      <span className="text-gray-700">{meaning}</span>
    </div>
  );
};

const Result = () => {
  const state = useSelector((state) => state);

  if (state.loading) {
    return (
      <div className="flex flex-col w-full gap-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  if (state.notfound) {
    return (
      <span className="text-red-500 text-lg font-medium text-center">
        No results found
      </span>
    );
  }

  if (!state.result.length) {
    return (
      <span className="text-gray-500 text-lg font-medium text-center">
        Start searching for meanings
      </span>
    );
  }

  return (
    <div className="flex flex-col">
      {state.result.map((res, key) => (
        <div key={key} className="flex shadow-lg m-2 p-6 rounded-lg w-full ">
          <div className="flex flex-col w-full">
            <span className="text-gray-800 text-2xl capitalize font-bold">
              {res.word}
            </span>
            <div className="flex flex-col gap-2">
              <span>Phonetics</span>
              <div className="flex flex-col gap-2">
                {res.phonetics.map((ph, key) => (
                  <audio key={key} controls>
                    <source src={ph.audio} />
                  </audio>
                ))}
              </div>
            </div>
            {res.meanings.map((mn, key) => (
              <div key={key} className="flex flex-col w-full">
                <Defination title="Parts of speech" meaning={mn.partOfSpeech} />
                {mn.definitions.map((df, key) => (
                  <div key={key} className="flex flex-col">
                    <div className="w-11/12 h-0.5 bg-gray-300 mx-auto"></div>
                    <Defination title="Definition" meaning={df.definition} />
                    <Defination
                      title="Example"
                      meaning={df.example ? df.example : "None"}
                    />
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
