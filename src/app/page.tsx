'use client';

import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

export default function Home() {
  const [mustSpin, setMustSpun] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);

  const data = [
    {
      id: 1,
      option: '냉면',
      style: { backgroundColor: '#ffe5f1', textColor: 'black' },
    },
    {
      id: 2,
      option: '쌈밥',
      style: { backgroundColor: '#983b56', textColor: 'black' },
    },
    {
      id: 3,
      option: '국수나무',
      style: { backgroundColor: '#b52dcd', textColor: 'black' },
    },
    {
      id: 4,
      option: '서브웨이',
      style: { backgroundColor: '#fc337b', textColor: 'black' },
    },
    {
      id: 5,
      option: '쌀국수',
      style: { backgroundColor: '#e5d7e6', textColor: 'black' },
    },
    {
      id: 6,
      option: '뜸들이다',
      style: { backgroundColor: '#60caeb', textColor: 'black' },
    },
    {
      id: 7,
      option: '칼국수',
      style: { backgroundColor: '#8feb47', textColor: 'black' },
    },
    {
      id: 8,
      option: '순대국',
      style: { backgroundColor: '#ad7ec5', textColor: 'black' },
    },
    {
      id: 9,
      option: '초밥',
      style: { backgroundColor: '#e7bbdd', textColor: 'black' },
    },
    {
      id: 10,
      option: '순두부',
      style: { backgroundColor: '#f16374', textColor: 'black' },
    },
    {
      id: 11,
      option: '삼계탕',
      style: { backgroundColor: '#2255b5', textColor: 'black' },
    },
    {
      id: 12,
      option: '분식',
      style: { backgroundColor: '#7685de', textColor: 'black' },
    },
    {
      id: 13,
      option: '김치찌개',
      style: { backgroundColor: '#f4abdc', textColor: 'black' },
    },
    {
      id: 14,
      option: '중국집',
      style: { backgroundColor: '#f9fc4a', textColor: 'black' },
    },
    {
      id: 15,
      option: '돈까스',
      style: { backgroundColor: '#9cd804', textColor: 'black' },
    },
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpun(true);
    }
  };

  console.log('prizeNumber', prizeNumber);

  return (
    <>
      <article className="flex justify-center text-center">
        <div>
          <p>rendom_food</p>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
            spinDuration={0.5}
            onStopSpinning={() => {
              setMustSpun(false);
            }}
          />
          <button onClick={() => handleSpinClick()} className="text-center">
            돌리기
          </button>
          <p>{!mustSpin ? data[prizeNumber]?.option : '추첨결과'}</p>
        </div>
      </article>
    </>
  );
}
