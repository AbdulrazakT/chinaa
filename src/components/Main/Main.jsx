import { useEffect, useState } from 'react'
import '../Navigation/navigation.css'

export const Main = ({ someone: { firstname, lastname } }) => {
    let [age, setAge] = useState(1)
    let [sub, setSUb] = useState(10)

    useEffect(() => {
        console.log('Addition');
    }, [])

    useEffect(() => {
        console.log('Subtraction');
    }, [])

    const handleAge = () => {
        age++
        setAge(age)
    }

    const handleSubtract = () => {
        sub--
        setSUb(sub)
    }
    const message = (age) => {
        if (age < 5)
            return <p>Baby</p>
        return <p>Gworn Up</p>
    }

    return (
        <main>
            <section id='section-1'>
                {firstname}
                <br />
                <br />
                <br />
                <br />
                <input type="button" value="Add" onClick={handleAge} />
                <br />
                <p>{age}</p>
                {
                    message(age)
                }
            </section>
            <section id='section-2'>
                {lastname}
                <br />
                <br />
                <br />
                <br />
                <input type="button" value="Subtract" onClick={handleSubtract} />
                <br />
                <p>{sub}</p>
                {
                    message(sub)
                }
            </section>
        </main>
    )
}


