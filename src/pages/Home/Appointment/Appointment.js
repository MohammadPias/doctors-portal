import React from 'react';
import AppointHeader from '../AppointHeader/AppointHeader';
import AvailableAppoint from '../AvailableAppoint/AvailableAppoint';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppointHeader date={date} setDate={setDate}></AppointHeader>
            <AvailableAppoint date={date}></AvailableAppoint>
        </div>
    );
};

export default Appointment;