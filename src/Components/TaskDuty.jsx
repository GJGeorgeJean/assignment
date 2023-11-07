import React from 'react'
import bigimage from '../assets/bro.jpg'
import '../Styles/TaskDuty.css'
const TaskDuty = () => {
  return (
    <div className='container d-flex align-items-center whole-body'>
        <div>
        <h2 className='text-dark'>Manage your Tasks on</h2>
        <h2 className='task-word'>TaskDuty</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure temporibus minus veniam labore obcaecati, alias, totam ipsam earum dolor quibusdam fuga dolore numquam illo expedita doloremque itaque, aliquam quam! Reiciendis autem mollitia in excepturi nesciunt, consequuntur ut animi qui voluptatum quis accusantium ab eum aperiam ea, recusandae sit sapiente veniam architecto iusto ad laborum minima! Laborum, placeat? Aspernatur, culpa voluptas.</p>
        <button className='btn btn-primary btn-rounded-pill'>Go to My Tasks</button>
        
        </div>
        
        <div className='big-image img-fluid'>
        <img src={bigimage} alt="" />
        </div>
    </div>
  )
}

export default TaskDuty