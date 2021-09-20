import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

class TableReport extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        {
          no: 1,
          tanggal: '10 Sept 2021',
          keterangan: 'Saldo Mengendap',
          debet: '-',
          kredit: 'Rp50.000',
          saldo: '-',
        },
        {
          no: 2,
          tanggal: '13 Sept 2021',
          keterangan: 'Biaya Kartu ATM',
          debet: '-',
          kredit: 'Rp10.000',
          saldo: '-',
        },
        {
          no: 3,
          tanggal: '17 Sept 2021',
          keterangan: 'Biaya Adm September',
          debet: '-',
          kredit: 'Rp15.000',
          saldo: '-',
        },
        {
          no: 4,
          tanggal: '19 Sept 2021',
          keterangan: 'Saldo per 19/09',
          debet: 'Rp2.335.009',
          kredit: '-',
          saldo: 'Rp2.260.009',
        },
        {
          no: 4,
          tanggal: '20 Sept 2021',
          keterangan: 'Penyaluran uang duka ayahanda Yanuar',
          debet: '-',
          kredit: 'Rp540.000',
          saldo: 'Rp1.720.009',
        },
      ],
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <Th key={index}>{key.toUpperCase()}</Th>;
    });
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { no, tanggal, keterangan, debet, kredit, saldo } = student; //destructuring
      return (
        <Tr key={no}>
          <Td>{no}</Td>
          <Td>{tanggal}</Td>
          <Td>{keterangan}</Td>
          <Td>{debet}</Td>
          <Td>{kredit}</Td>
          <Td>{saldo}</Td>
        </Tr>
      );
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <h1 id='title'>
          Catatan Pengeluaran Dana Donatur SMANSA 2013 Tahun 2021
        </h1>
        <br></br>
        <Table id='students'>
          <Thead>
            <Tr>{this.renderTableHeader()}</Tr>
          </Thead>
          <Tbody>{this.renderTableData()}</Tbody>
        </Table>
        <br></br>
        <br></br>
        <h3 id='title'>
          Saldo akhir : <b>Rp1.720.009</b>
        </h3>
      </div>
    );
  }
}

export default TableReport;
