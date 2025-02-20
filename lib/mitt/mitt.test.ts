import { describe, it, expect, vi } from 'vitest'
import mitt from '.'

describe('mitt', ()=>{
  it('should default export be a function', ()=>{
    expect(mitt).to.be.a('function')
  })


})
