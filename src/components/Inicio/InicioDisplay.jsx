import React from 'react'
import '../../index.css'
import { Card } from 'antd';
import moment from 'moment'

const { Meta } = Card;

const InicioDisplay = ({events})=>{ 
    return(
        <div className="contentInicio">
            {/* <div className="white-cloud-arriba flip">
            <img src={cloud} alt="nube"/>
            </div>
            <div className="parallax"></div>
            <div className="white-cloud">
                <img src={cloud} alt="cloud"/>
            </div> */}
            <div className="white"></div>
            <div className="parallax"></div>
            <div className="white-down"></div>

            <div className="titleMain">
                <h3>Próximos eventos</h3>
            </div>

            <div className="father">
                {events.map((b, key)=>{
                return  <Card className="eventCard"
                    key={key}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="eventPic" src={b.imageURL} />}> 
                    <Meta
                        title={b.name}
                        description={moment(b.date).format('LL')}/>
                    </Card>
                })}        
            </div> 
        </div>
    )
}

export default InicioDisplay