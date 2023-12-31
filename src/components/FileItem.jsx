import React from 'react'
import { useNavigate } from 'react-router-dom'
const FileItem = (props) => {
  const nav = useNavigate()
  const viewFile = (cid, filename) => {
    window.open(`https://${cid}.ipfs.w3s.link/${filename}`)
  }
  return (
    <div className='file-item'>
      <div className='meta-data'>
        <h3>File Name - {props.file.fileName}</h3>
        <h3>Created At - {props.file.createdAt}</h3>
        <h3> File Hash - {props.file.fileCid}</h3>
      </div>
      <div className='actions'>
        <button className='button' onClick={() => nav(`/approve-address/${props.file.fileCid}`)} >Aproove Access</button>
        <button className='button' onClick={() => viewFile(props.file.fileCid, props.file.fileName)} >View</button>
      </div>
    </div>
  )
}

export default FileItem