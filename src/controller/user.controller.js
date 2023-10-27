import {
  getAmericanUsersRepository,
  getBolivianUsersRepository,
  getAmericanUserRepository,
  getBolivianUserRepository,
  deleteAmericanUserRepository,
  deleteBolivianUserRepository,
  createAmericanUserRepository,
  createBolivianUserRepository
} from '../repositories/user.repository.js'

export const getBolivianUsers = async (req, res) => {
  try {
    const users = await getBolivianUsersRepository()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getAmericanUsers = async (req, res) => {
  try {
    const users = await getAmericanUsersRepository()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getBolivianUser = async (req, res) => {
  try {
    const { id } = req.params
    const users = await getBolivianUserRepository(id)
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getAmericanUser = async (req, res) => {
  try {
    const { id } = req.params
    const users = await getAmericanUserRepository(id)
    res.status(200).json(users)
  } catch {
    res.status(500).json({ message: err.message })
  }
}

export const createAmericanUser = async (req, res) => {
  try {
    const { body } = req
    const newUser = createAmericanUserRepository(body)
    res.status(200).json(newUser)
  } catch {
    res.status(500).json({ message: err.message })
  }
}

export const createBolivianUser = async (req, res) => {
  try {
    const { body } = req
    const newUser = createBolivianUserRepository(body)
    res.status(200).json(newUser)
  } catch {
    res.status(500).json({ message: err.message })
  }
}

export const deleteAmericanUser = async (req, res) => {
  try {
    const { id } = req.params
    const users = await deleteAmericanUserRepository(id)
    res.status(200).json(users)
  } catch {
    res.status(500).json({ message: err.message })
  }
}

export const deleteBolivianUser = async (req, res) => {
  try {
    const { id } = req.params
    const users = await deleteBolivianUserRepository(id)
    res.status(200).json(users)
  } catch {
    res.status(500).json({ message: err.message })
  }
}
