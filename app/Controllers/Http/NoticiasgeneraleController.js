'use strict'
const noticiasG = use('App/models/Noticiasgenerale');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with noticiasgenerales
 */
class NoticiasgeneraleController {
  /**
   * Show a list of all noticiasgenerales.
   * GET noticiasgenerales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let noticias = await noticiasG.all();
    return view.render('noticias.index',{noticias: noticias.toJSON()});
  }

  /**
   * Render a form to be used for creating a new noticiasgenerale.
   * GET noticiasgenerales/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new noticiasgenerale.
   * POST noticiasgenerales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single noticiasgenerale.
   * GET noticiasgenerales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing noticiasgenerale.
   * GET noticiasgenerales/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update noticiasgenerale details.
   * PUT or PATCH noticiasgenerales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a noticiasgenerale with id.
   * DELETE noticiasgenerales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = NoticiasgeneraleController
