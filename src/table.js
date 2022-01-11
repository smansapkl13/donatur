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
          no: 5,
          tanggal: '20 Sept 2021',
          keterangan: 'Penyaluran uang duka Ayahanda Yanuar',
          debet: '-',
          kredit: 'Rp540.000',
          saldo: 'Rp1.720.009',
        },
        {
          no: 6,
          tanggal: '04 Okt 2021',
          keterangan: 'Pemasukan Donasi Pokok 21/09 sampai 04/10 ',
          debet: 'Rp1.420.612',
          kredit: '-',
          saldo: 'Rp3.140.621',
        },
        {
          no: 7,
          tanggal: '04 Okt 2021',
          keterangan: 'Penyaluran uang duka Ibunda Kiki Atmadja',
          debet: '-',
          kredit: 'Rp540.000',
          saldo: 'Rp2.600.621',
        },
        {
          no: 8,
          tanggal: '11 Okt 2021',
          keterangan: 'Pemasukan Kas 04/10 sampai 11/10',
          debet: 'Rp120.000',
          kredit: '-',
          saldo: 'Rp2.720.621',
        },
        {
          no: 9,
          tanggal: '20 Okt 2021',
          keterangan: 'Pemasukan Kas 11/10 sampai 18/10',
          debet: 'Rp24.000',
          kredit: '-',
          saldo: 'Rp2.960.621',
        },
        {
          no: 10,
          tanggal: '15 Okt 2021',
          keterangan: 'BIAYA ADM OKTOBER',
          debet: '-',
          kredit: 'Rp15.000',
          saldo: 'Rp2.945.621',
        },
        {
          no: 11,
          tanggal: '12 November 2021',
          keterangan: 'Pemasukan Kas 19/10 sampai 12/11',
          debet: 'Rp1750.000',
          kredit: '-',
          saldo: 'Rp3.120.621',
        },
        {
          no: 12,
          tanggal: '19 November 2021',
          keterangan: 'BIAYA ADM NOVEMBER',
          debet: '-',
          kredit: 'Rp15.000',
          saldo: 'Rp3.105.621',
        },
        {
          no: 13,
          tanggal: '1 Desember 2021',
          keterangan: 'Pemasukan Kas 13/11 sampai 01/12',
          debet: 'Rp220.000',
          kredit: '-',
          saldo: 'Rp3.325.621',
        },
        {
          no: 14,
          tanggal: '13 Desember 2021',
          keterangan: 'Pemasukan Kas 02/12 sampai 13/12',
          debet: 'Rp265.000',
          kredit: '-',
          saldo: 'Rp3.590.621',
        },
        {
          no: 15,
          tanggal: '3 Januari 2022',
          keterangan: 'Pemasukan Kas 14/12/2021 sampai 31/12/2021',
          debet: 'Rp1.565.000',
          kredit: '-',
          saldo: 'Rp5.155.621,00',
        },
        {
          no: 15,
          tanggal: '3 Januari 2022',
          keterangan: 'BIAYA ADM DESEMBER',
          debet: '-',
          kredit: 'Rp15.000',
          saldo: 'Rp5.140.621,00',
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
        <h1 id='title'>Catatan Pengeluaran Dana Kas SMANSA 2013 Tahun 2021</h1>
        <p>
          Data berikut merupakan data kas dari donatur yang dikumpulkan setiap
          bulan yang besarannya telah disepakati dan bukan merupakan dana khusus
          yang dikumpulkan saat ada kejadian khusus
        </p>
        <br></br>
        <Table id='students'>
          <Thead>
            <Tr>{this.renderTableHeader()}</Tr>
          </Thead>
          <Tbody>{this.renderTableData()}</Tbody>
        </Table>
        <br></br>
        <br></br>
        Saldo akhir : <b>Rp5.140.621</b>
        <p id='note'>
          *Untuk tampilan lebih baik dapat menggunakan laptop atau browser
          smartphone dengan mode desktop diaktifkan
        </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default TableReport;
