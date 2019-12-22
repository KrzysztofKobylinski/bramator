import React, { Component, Fragment } from 'react'

import Carousel, { Modal, ModalGateway } from 'react-images'

import Column from '../Column/'
import Image from '../Image/'

export default class GridGallery extends Component {
  state = {
    selectedIndex: 0,
    lightboxIsOpen: false
  }
  toggleLightbox = selectedIndex => {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex
    }))
  }
  render() {
    const { images, columns, gap } = this.props
    const { selectedIndex, lightboxIsOpen } = this.state
    console.log(columns)
    console.log((1 / columns) * 100)

    return (
      <Fragment>
        <Column columns={columns} gap={gap}>
          {images.map(({ author, caption, source }, j) => (
              <div>

                <Image src={source.thumbnail} onClick={() => this.toggleLightbox(j)} key={j} />
              </div>
          ))}
        </Column>

        <ModalGateway>
          {lightboxIsOpen ? (
            <Modal onClose={this.toggleLightbox}>
              <Carousel currentIndex={selectedIndex} frameProps={{ autoSize: 'height' }} views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </Fragment>
    )
  }
}
