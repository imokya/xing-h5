class Dialog {

  constructor(_conf) {
    this.conf = Object.assign({
      cancel: true
    }, _conf)
    this._initDom()
    this._bindEvent()
  }

  _cleanup() {
    const overlay = $('.overlay')
    overlay.off()
    overlay.remove()
  }

  _initDom() {
    this._cleanup()
    this.overlay = $('<div>').addClass('hide overlay')
    this.overlay.append(this.conf.el)
    this.overlay.css({
      top: 0,
      zIndex: 20,
      width: '750px',
      height: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.95)'
    })
    $('#app').append(this.overlay)
    this.el = this.conf.el
  }

  _bindEvent() {
    this.overlay.on('click', (e) => {
      if (this.conf.cancel)
        this.overlay.addClass('hide')
    })
  }

  hide() {
    this.overlay.removeClass('fadeIn')
    this.overlay.addClass('hide')
    this.el.addClass('hide')
  }

  show() {
    this.overlay.addClass('fadeIn')
    this.overlay.removeClass('hide')
    this.el.removeClass('hide')
  }

  destroy() {
    if (this.overlay) {
      this.overlay.off()
      this.overlay.remove()
    }
    this.el && this.el.remove()
  }

}

export default Dialog