import './skeleton.css';

/**
 * @module Skeleton
 */

/**
 *
 * @param {Object} styles - need to pass styles for skeleton
 * @returns {HTMLElement} - returns Skeleton
 */


class Skeleton {

  /**
   * title
   * @type {Object}
   */
  styles;

  constructor(styles) {
    this.styles = styles;
  }

  render() {
    const skeletonWraper = document.createElement('div');
    const skeletonItemWrapper = document.createElement('div');
    const skeletonItem = document.createElement('div');
    const skeletonHeader = document.createElement('div');
    const skeletonTitle = document.createElement('div');

    const itemFragment = document.createDocumentFragment();
    const cardFragment = document.createDocumentFragment();

    skeletonItemWrapper.className = 'skeleton-item-wrapper';
    skeletonItem.className = 'skeleton-item';
    skeletonHeader.className = 'skeleton-header';
    skeletonTitle.className = 'skeleton-title';

    itemFragment.append(skeletonHeader);
    itemFragment.append(skeletonTitle);

    skeletonItem.appendChild(itemFragment)

    skeletonWraper.style.color = this.styles.color;

    for(let i = 0; i < 4; i++){
      cardFragment.append(skeletonItem);
    }

    skeletonItemWrapper.appendChild(cardFragment);

    skeletonWraper.appendChild(skeletonItemWrapper);

    return skeletonWraper;
  }
}

export default Skeleton;
