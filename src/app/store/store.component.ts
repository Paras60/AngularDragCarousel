import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'carousel';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  direction = '';
  $ = (selector: any) => {
    return document.querySelector(selector);
  };

  prev() {
    let newNextText;
    if (this.$('.right-item')) {
      newNextText = this.$('.right-item').innerText;
      this.$('.right-item').remove();
    }
    this.$('.next').classList.add('right-item');
    this.$('.act').classList.add('next');
    this.$('.act').classList.remove('act', 'center_item');
    if (this.$('.start_here')) {
      this.$('.start_here').remove();
    }
    this.$('.prev').classList.add('act', 'center_item');
    this.$('.prev').classList.remove('prev');
    const start_here = document.createElement('p');
    start_here.classList.add('start_here');
    start_here.innerHTML = 'Start Here >';
    this.$('.act').appendChild(start_here);
    /* New Prev */
    this.$('.hide').classList.add('prev');
    this.$('.hide').classList.remove('hide');
    const addedEl = document.createElement('li');
    const para = document.createElement('p');
    para.classList.add('box-content');
    para.innerHTML = newNextText;
    addedEl.appendChild(para);
    this.$('.list').insertBefore(addedEl, this.$('.list').firstChild);
    if (window.screen.availWidth > 1024) {
      addedEl.classList.add('hide', 'rel', 'elemReverse');
    } else {
      addedEl.classList.add('hide', 'rel');
    }
  }

  next() {
    let hideText;
    if (this.$('.hide')) {
      hideText = this.$('.hide').innerText;
      this.$('.hide').remove();
    }
    /* Step */
    if (this.$('.prev')) {
      this.$('.prev').classList.add('hide');
      this.$('.prev').classList.remove('prev');
    }
    this.$('.act').classList.add('prev');
    this.$('.act').classList.remove('act', 'center_item');
    if (this.$('.start_here')) {
      this.$('.start_here').remove();
    }
    this.$('.next').classList.add('act', 'center_item');
    this.$('.next').classList.remove('next');
    const start_here = document.createElement('p');
    start_here.classList.add('start_here');
    start_here.innerHTML = 'Start Here >';
    this.$('.act').appendChild(start_here);
    /* New Next */
    this.$('.right-item').classList.remove('right-item');
    const addedEl = document.createElement('li');
    const para = document.createElement('p');
    para.classList.add('box-content');
    para.innerHTML = hideText;
    addedEl.appendChild(para);
    this.$('.list').appendChild(addedEl);
    if (window.screen.availWidth > 1024) {
      addedEl.classList.add('next', 'right-item', 'rel', 'elemForward');
    } else {
      addedEl.classList.add('next', 'right-item', 'rel');
    }
  }

  onSwipe(event: any) {
    console.log('event', event);
    const x =
      Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'Right' : 'Left') : '';

    if (x == 'Right') {
      this.prev();
    } else {
      this.next();
    }
  }

}
