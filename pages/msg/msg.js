Page({
  onOpen(event) {
    const { position, name } = event.detail;
    switch (position) {
      case 'left':
        Notify({
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`
        });
        break;
      case 'right':
        Notify({
          type: 'primary',
          message: `${name}${position}部分展示open事件被触发`
        });
        break;
    }
  }
});