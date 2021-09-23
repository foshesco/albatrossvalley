import { Component, useEffect, useState } from "react";
import { useGetRankingsQuery } from "../../../api/rankingApi";
import './ranking-common.css';

const WorldRankingTable = () => {
    const { data: rankingList, isFetching } = useGetRankingsQuery();
    const [rank, setRank] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const filteredData = rankingList?.results?.rankings.filter((player) => player.player_name.toLowerCase().includes(search.toLowerCase()))
        setRank(filteredData);
    }, [rankingList, search])

    if (isFetching) return <div className="loadingDiv"><div className='loadingDots' /></div>

    return (
        <section>
            <div className="searchRank">
                <input placeholder='Search Players' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <table class="table table-striped table-hover tableContainer">
                <thead>
                    <tr>
                        <th>
                            Rank
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Number of Events
                        </th>
                        <th>
                            Average Points
                        </th>
                        <th>
                            Points Gained
                        </th>
                        <th>
                            Points Lost
                        </th>
                        <th>
                            Total Points
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* keys may not be */}
                    {rank?.map((player) => (
                        <tr key={player.id}>
                            <th>{player.position}</th>
                            <td>{player.player_name}</td>
                            <td>{player.num_events}</td>
                            <td>{player.avg_points}</td>
                            <td>{player.points_gained}</td>
                            <td>{player.points_lost}</td>
                            <td>{player.total_points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default WorldRankingTable