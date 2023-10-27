import { Router } from 'express'
import {
  getBolivianUsers,
  getAmericanUsers,
  getAmericanUser,
  getBolivianUser,
  createAmericanUser,
  createBolivianUser,
  deleteAmericanUser,
  deleteBolivianUser
} from '../controller/user.controller.js'

const router = Router()

router.get('/bolivian-users', getBolivianUsers)
router.get('/american-users', getAmericanUsers)

router.get('/bolivian-user/:id', getBolivianUser)
router.get('/american-user/:id', getAmericanUser)

router.post('/create-american-user', createAmericanUser)
router.post('/create-bolivian-user', createBolivianUser)

router.delete('/delete-american-user/:id', deleteAmericanUser)
router.delete('/delete-bolivian-user/:id', deleteBolivianUser)

export default router
