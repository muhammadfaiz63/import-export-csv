import React, { useEffect, useState } from 'react'
import './App.css'
import { alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import moment from 'moment'
import { CSVLink } from 'react-csv'
import { Container } from '@mui/system'
import { Button } from '@mui/material'

export default function App() {
  const data = [
    {
      nim: 2020230044,
      name: 'Khoirul Mustaan',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
    {
      nim: 2020230018,
      name: 'Muhammad Respati Abimanyu Putro',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
    {
      nim: 2020230065,
      name: 'Muhammad Faiz',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
    {
      nim: 2020230100,
      name: 'Ahmad Hussein Al Fajri',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
    {
      nim: 2020230059,
      name: 'Muhammad Hatta Alfaritzy',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
    {
      nim: 2020230003,
      name: 'Dhafa Syarif C.K',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
    {
      nim: 2020230043,
      name: 'Aclis Setyo Prihananto',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
    {
      nim: 2020230074,
      name: 'Josi gunawan',
      major: 'Teknologi Informasi',
      university: 'Universitas Darma Persada ',
    },
  ]

  const [rows, setRows] = useState([])

  let headers = [
    { label: 'Nama', key: 'name' },
    { label: 'Nim', key: 'nim' },
    { label: 'Jurusan', key: 'major' },
    { label: 'Universitas', key: 'university' },
  ]

  useEffect(() => {
    setRows(data)
  }, [rows])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
        alignItems: 'center',
      }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <CSVLink
          data={data}
          headers={headers}
          filename={`data-${moment().format('YYYYMMDDHHmmss')}.csv`}
          separator=';'>
          <Button variant='contained' color='secondary'>
            <Typography
              align='left'
              sx={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>
              Export To CSV
            </Typography>
          </Button>
        </CSVLink>

        <Button variant='contained' color='info' sx={{ ml: 1 }}>
          <Typography
            align='left'
            sx={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>
            Import CSV To JSON
          </Typography>
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Nim</TableCell>
            <TableCell>Jurusan</TableCell>
            <TableCell>Universitas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item) => (
            <TableRow>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.nim}</TableCell>
              <TableCell>{item.major}</TableCell>
              <TableCell>{item.university}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  )
}
