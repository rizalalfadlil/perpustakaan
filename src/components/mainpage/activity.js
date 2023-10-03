import React from "react";
import { Table } from "react-bootstrap";
export function ActivityLog(){
    return (
        <div className="box activity">
            <div className="box-title">Riwayat Aktivitas</div>
            <hr/>
            <table>
                <tr>
                    <th className="time">waktu</th>
                    <th>aktivitas</th>
                </tr>
                <tr>
                    <td>waktu</td>
                    <td>aktivitas</td>
                </tr>
                <tr>
                    <td>waktu</td>
                    <td>aktivitas</td>
                </tr>
            </table>
        </div>
    )
}