import React from 'react';
import Button from './button'



const keys = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '=', '/']

class Calculator extends React.Component {
    render() {
        return (
            keys.map((key, index) => {
                if (index % 4 != 0) {
                    return <Button name={key} calculatorKey={key} />
                } else {

                    return (
                        <>
                            <br />
                            <Button name={key} calculatorKey={key} />
                        </>
                    )
                }

            }

            )
        )
    }
}
export default Calculator