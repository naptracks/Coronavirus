import React from 'react'
import useStats from './fetch/useStats'

function Stats() {
    const stats = useStats('https://covid19.mathdro.id/api')
    console.log(stats)
    if(!stats) return <p>Loading...</p>;

    return (
        <div>
            <div class='statBlock'>
                <h3>Cas de CORONAVIRUS comfirmés: </h3>
                <span>{stats.confirmed.value}</span>
            </div>
            <div class='statBlock'>
                <h3>Cas de CORONAVIRUS décédés: </h3>
                <span>{stats.deaths.value}</span>
            </div>
            <div class='statBlock'>
                <h3>Cas de CORONAVIRUS guéris: </h3>
                <span>{stats.recovered.value}</span>
            </div>
        </div>
    )
}

export default function IndexPage() {
    return (
        <div>
            <Stats/>
        </div>
    )
}