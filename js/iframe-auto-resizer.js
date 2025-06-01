function sendHeightToParent(extra = 50) {
  function send() {
    const height = document.body.scrollHeight + extra;
    parent.postMessage({
      type: 'setHeight',
      height: height,
      src: window.location.pathname.replace(/^.*\/tools\//, 'tools/')
    }, '*');
  }

  window.addEventListener('load', send);
  new ResizeObserver(send).observe(document.body);
}

sendHeightToParent(); // You can pass a custom buffer if needed