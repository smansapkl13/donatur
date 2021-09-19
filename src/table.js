import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            students: [
                { no: 1, tanggal: '10 Sept 2021', keterangan: "Saldo Awal", debet: 'Rp75.000', kredit: '-', saldo: 'Rp75.000' },
                { no: 2, tanggal: '10 Sept 2021', keterangan: "Saldo Mengendap", debet: '-', kredit: 'Rp50.000', saldo: 'Rp25.000' },
                { no: 3, tanggal: '13 Sept 2021', keterangan: "Biaya Kartu ATM", debet: '-', kredit: 'Rp10.000', saldo: 'Rp15.000' },
                { no: 4, tanggal: '17 Sept 2021', keterangan: "Biaya Adm September", debet: '-', kredit: 'Rp15.000', saldo: 'Rp0' },
                { no: 4, tanggal: '19 Sept 2021', keterangan: "Saldo per 19/09", debet: 'Rp2.135.009', kredit: '-', saldo: 'Rp2.135.009' }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { no, tanggal, keterangan, debet, kredit, saldo } = student //destructuring
            return (
                <tr key={no}>
                <td>{no}</td>
                <td>{tanggal}</td>
                <td>{keterangan}</td>
                <td>{debet}</td>
                <td>{kredit}</td>
                <td>{saldo}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <h1 id='title'>Catatan Pengeluaran Dana Donatur SMANSA 2013 Tahun 2021</h1>
                <br></br>
                <table id='students' class='center'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table