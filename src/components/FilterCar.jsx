import React from 'react'

export default function FilterCar() { 
  return (
    <div className="filter-flex-container">
        <div className="flex-filter-item pick-up">
            <div className="title">
                <div className="filtercircle-outer">
                    <div className="filtercircle-inner"></div>
                </div>Pick Up</div>
            <div className="filter-item">
                <div className="location">
                    <div className="title">Locations</div>
                    <select name="" id="" defaultValue={'default'}>
                        <option value="default" disabled={true}>Select a City</option>
                        <option value="">Lahore</option>
                        <option value="">Multan</option>
                    </select>
                </div>
                <div className="date">
                    <div className="title">Date</div> 
                    <select name="" id="" defaultValue={'default'}>
                        <option value="default" disabled={true}>Select a Date</option>
                        <option value="">14-07-2021</option>
                    </select>
                </div>
                <div className="time">
                    <div className="title">Time</div> 
                    <select name="" id="" defaultValue={'default'}>
                        <option value="default" disabled={true}>Select a Time</option>
                        <option value="">7:10 PK</option>
                        <option value="">8:10 PK</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="flex-filter-item filter-arrow">
            <img src='./icons/arrow-up-down.svg' className='up-down-arrow'></img>
        </div>
        <div className="flex-filter-item drop-off">
            <div className="title">
                <div className="filtercircle-outer">
                    <div className="filtercircle-inner"></div>
                </div>Drop Off</div>
            <div className="filter-item">
                <div className="location">
                    <div className="title">Locations</div>
                    <select name="" id="" defaultValue={'default'}>
                        <option value="default" disabled={true}>Select a City</option>
                        <option value="">Lahore</option>
                        <option value="">Multan</option>
                    </select>
                </div>
                <div className="date">
                    <div className="title">Date</div> 
                    <select name="" id="" defaultValue={'default'}>
                        <option value="default" disabled={true}>Select a Date</option>
                        <option value="">14-07-2021</option>
                    </select>
                </div>
                <div className="time">
                    <div className="title">Time</div> 
                    <select name="" id="" defaultValue={'default'}>
                        <option value="default" disabled={true}>Select a Time</option>
                        <option value="">7:10 PK</option>
                        <option value="">8:10 PK</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}
