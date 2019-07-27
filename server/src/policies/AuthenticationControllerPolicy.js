// para politica de seguridad
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      firstName: Joi.string().alphanum().min(3).max(30).required(),
      surName: Joi.string().alphanum().min(3).max(30).required(),
      birthDate: Joi.date().required(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    // eslint-disable-next-line no-unused-vars
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'firstName':
        res.status(400).send({
          error: 'Necesitas indicar un nombre valido'
        })
        break
        case 'surName':
        res.status(400).send({
          error: 'Necesitas indicar un apellido valido'
        })
        break
        case 'birthDate':
        res.status(400).send({
          error: 'Necesitas indicar una fecha de nacimiento valida'
        })
        break
        case 'email':
          res.status(400).send({
            error: 'Necesitas indicar un email valido'
          })
          break
        case 'password':
          res.status(400).send({
            error: `El password indicado tiene que cumplir estas reglas
            <br>
            1. Necesita contener solo letras minisculas,letras mayusculas y numero
            <br>
            2. Necesita tener al menos 8 caracteres y no mas de 32
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Información de registro invalida'
          })
      }
    } else {
      next()
    }
  }
}
