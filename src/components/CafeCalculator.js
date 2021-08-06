import React, { useState, useCallback } from 'react';
// import { useEffect } from 'react';



function CafeCalculator() {
    const [countA, setCountA] = useState(0)
    const [countL, setCountL] = useState(0)
    const [countM, setCountM] = useState(0)
    const [rest, setRest] = useState(50000)
    const handleClick = () => {
        const cal = 50000 - (4100 * countA) - (4600 * countL) - (5100 * countM)
        if (cal > 0) {
            setRest(cal)
        } else {
            setRest(0)
        }
    }
    // const handleClick = () => {
    //   setRest(50000 -(4100*countA)-(4600*countL)-(5100*countM))
    // }

    const totalSum = useCallback(() => {
        if (50000 - (4100 * countA) - (4600 * countL) - (5100 * countM) > 0) {
            return 50000 - rest
        } else {
            return "예산초과"
        } // eslint-disable-next-line
    }, [rest])
    // const totalSum = useCallback(() => {
    //   return 50000-rest
    // }, [rest])


    // useEffect(()=>{
    //   if (countA < 0) {
    //     setCountA(0)
    //   }
    // }) => Math.max 와 같은 효과

    return (
        <div className="mathProblem">
            <p>
                ₩4100 아메리카노: {countA}&nbsp;
                <button onClick={() => setCountA(countA + 1)}>추가</button>
                <button onClick={() => setCountA(Math.max(0, countA - 1))}>감소</button>
            </p>
            <p>
                ₩4600 카페라떼: {countL}&nbsp;
                <button onClick={() => setCountL(countL + 1)}>추가</button>
                <button onClick={() => setCountL(Math.max(0, countL - 1))}>감소</button>
            </p>
            <p>
                ₩5100 캐러멜 마키아토: {countM}&nbsp;
                <button onClick={() => setCountM(countM + 1)}>추가</button>
                <button onClick={() => setCountM(Math.max(0, countM - 1))}>감소</button>
            </p>
            <p>
                <button onClick={handleClick}>총 가격</button>
                : {totalSum()}
            </p>
            <p>
                남는 돈: {rest}
            </p>
        </div>
    );
}

export default CafeCalculator;
