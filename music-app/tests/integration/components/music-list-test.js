import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | music-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders 10 albums', async function(assert) {
    this.set('albums', [
      EmberObject.create({ name: 'Cancion' })
    ]);

    await render(hbs`<MusicList @albums={{albums}}/>`);

    let listItems = findAll('[data-test=music-list-item]');

    assert.equal(listItems.length, 10, '10 albums are rendered');
  });
});
