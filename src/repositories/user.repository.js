import { bolivianClient, americanClient } from '../config/db.config.js'

export const getAmericanUsersRepository = async () => {
  const query = 'SELECT * FROM user'
  const params = []
  const { rows } = await americanClient.execute(query, params, {
    prepare: true
  })
  return rows
}

export const getBolivianUsersRepository = async () => {
  const query = 'SELECT * FROM user'
  const params = []
  const { rows } = await bolivianClient.execute(query, params, {
    prepare: true
  })
  return rows
}

export const getAmericanUserRepository = async userId => {
  const query = 'SELECT * FROM user WHERE id = ?'
  const params = [userId]
  const { rows } = await americanClient.execute(query, params, {
    prepare: true
  })
  return rows
}

export const getBolivianUserRepository = async userId => {
  const query = 'SELECT * FROM user WHERE id = ?'
  const params = [userId]
  const { rows } = await bolivianClient.execute(query, params, {
    prepare: true
  })
  return rows
}

export const createAmericanUserRepository = async user => {
  const query =
    'INSERT INTO user (id, name, last_name, birthday, email, city) VALUES (?, ?, ?, ? ,? ,?)'
  const params = [
    user.id,
    user.name,
    user.lastName,
    user.birthday,
    user.email,
    user.city
  ]
  const { rows } = await americanClient.execute(query, params, {
    prepare: true
  })
  return rows
}

export const createBolivianUserRepository = async user => {
  const query =
    'INSERT INTO user (id, name, last_name, birthday, email, city) VALUES (?, ?, ?, ? ,? ,?)'
  const params = [
    user.id,
    user.name,
    user.lastName,
    user.birthday,
    user.email,
    user.city
  ]
  const { rows } = await bolivianClient.execute(query, params, {
    prepare: true
  })
  return rows
}

export const deleteAmericanUserRepository = async userId => {
  const query = 'DELETE FROM user WHERE id = ?'
  const params = [userId]
  await americanClient.execute(query, params, {
    prepare: true
  })
}

export const deleteBolivianUserRepository = async userId => {
  const query = 'DELETE FROM user WHERE id = ?'
  const params = [userId]
  await bolivianClient.execute(query, params, {
    prepare: true
  })
}
