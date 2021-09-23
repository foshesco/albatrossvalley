import { Component } from "react";
import { useGetRankingsQuery } from "../../../api/rankingApi";
import './ranking-common.css';
import WorldRankingTable from "./WorldRankingTable";

const WorldRankingsView = () => {
    const { data, isFetching } = useGetRankingsQuery();
    const worldRankings = data?.results?.rankings;

    return (
        <section className='pageContainer'>
            {isFetching || data === undefined ? <div className="loadingDiv"><div className='loadingDots' /></div> :
                <section>
                    <div className="rankingHeader">
                        {data.meta.description}
                    </div>
                    <div className="rankingHeaderContainer">
                        <div>
                            <b>Total Ranked Golfers:</b> {worldRankings.length}
                        </div>
                        <div>
                            <b>Current #1 Golfer:</b> {worldRankings[0].player_name}
                        </div>
                        <div>
                            <b>Current #{worldRankings.length} Golfer:</b> {worldRankings.at(-1).player_name}
                        </div>
                    </div>
                    <WorldRankingTable />
                </section>}
        </section>
    )
}

export default WorldRankingsView