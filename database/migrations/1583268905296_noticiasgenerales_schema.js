'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoticiasgeneralesSchema extends Schema {
  up () {
    this.create('noticiasgenerales', (table) => {
      table.increments()
      table.timestamps()
      table.string('titulo', 60).notNullable()
      table.string('fecha', 100).notNullable()
      table.string('categoria', 100).notNullable()
      table.string('centro', 100).notNullable()
      table.string('multimedia', 100).notNullable()
      table.string('descripcion', 1000).notNullable()
    })
  }

  down () {
    this.drop('noticiasgenerales')
  }
}

module.exports = NoticiasgeneralesSchema
