'use client';

import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';

interface StyleType {
  backgroundColor?: string;
  textColor?: string;
}

interface WheelData {
  id?: number;
  option?: string;
  style?: StyleType;
}

export default function Home() {
  const [mustSpin, setMustSpun] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);

  const data: WheelData[] = [
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
      option: '덮밥',
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

  useEffect(() => {
    if (typeof window === 'undefined') return;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      !mustSpin && prizeNumber
        ? alert(`추첨결과는 ${data[prizeNumber]?.option} 입니다!`)
        : null;
    }, 500);
  }, [!mustSpin]);

  return (
    <>
      <article className="flex justify-center text-center">
        <div>
          <p>점심메뉴 선정 v0.1.0</p>
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
          <button
            onClick={() => handleSpinClick()}
            className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            돌리기
          </button>
          <p>
            {!mustSpin && prizeNumber
              ? `오늘의 점심메뉴는 ${data[prizeNumber]?.option} 당첨!`
              : '오늘의 점심'}
          </p>
        </div>
      </article>
    </>
  );
}
