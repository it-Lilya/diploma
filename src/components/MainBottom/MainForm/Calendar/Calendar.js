import React, {useState} from "react";
import Calendar from "react-calendar";
import './Calendar.css'

export function MyApp() {
    const [value, onChange] = useState(new Date());
    return (
            <Calendar onChange={onChange} value={value} />
    );
}