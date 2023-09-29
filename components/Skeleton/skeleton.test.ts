import Skeleton from './skeleton';
import { describe, expect, it } from '@jest/globals'

describe('Skeleton', () => {

  it('should render 4 skeleton items', () => {
    const styles = { color: 'blue' };
    const skeleton = new Skeleton(styles);

    const renderedSkeleton = skeleton.render();

    const skeletonItems = renderedSkeleton.querySelectorAll('.skeleton-item');

    expect(skeletonItems.length).toBe(1);
  });
});
