import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

let words: string = `"The loneliest people are the kindest. 
The saddest people smile the brightest. The most damaged people are the wisest. 
All because they don't wish to see anyone else suffer the way they did." - Jellal Fernandes`;

let arrayOfWords: string[] = words.split('');

const Typearea = () => {
  const [letters, setLetters] = useState('');

  const onChangeTextArea = (e: any) => {
    setLetters(e.target.value);

    if (
      letters.length > 0 &&
      letters.slice(letters.length - 1, letters.length) ==
        arrayOfWords[letters.length - 1]
    ) {
    } else {
      console.log('wrong');
    }
  };

  return (
    <>
      <textarea autoFocus onChange={onChangeTextArea}></textarea>
      <ul className="w-4/5 m-auto">
        {arrayOfWords.map((word: string) => (
          <li key={uuidv4()} className="inline">
            {word.split('')}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Typearea;

// TODO: Write a function to compare the useState position, to the quote position, if match add class red else black
