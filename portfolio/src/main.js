import './style.css'
import { createIcons, ExternalLink } from 'lucide';

createIcons({
  icons: {
    ExternalLink
  }
});

// Signature Hover Interaction Logic
document.addEventListener('DOMContentLoaded', () => {
  const hoverPreview = document.getElementById('hover-preview');
  const hoverPreviewText = document.getElementById('hover-preview-text');
  const projectRows = document.querySelectorAll('.project-row');

  if (!hoverPreview || !hoverPreviewText) return;

  projectRows.forEach(row => {
    row.addEventListener('mouseenter', (e) => {
      const text = row.getAttribute('data-preview');
      if (text) {
        hoverPreviewText.textContent = text;
        hoverPreview.classList.remove('opacity-0');
        hoverPreview.classList.add('opacity-100');
      }
    });

    row.addEventListener('mousemove', (e) => {
      // Offset preview slightly from the mouse cursor
      const x = e.clientX + 15;
      const y = e.clientY + 15;
      hoverPreview.style.left = `${x}px`;
      hoverPreview.style.top = `${y}px`;
    });

    row.addEventListener('mouseleave', () => {
      hoverPreview.classList.remove('opacity-100');
      hoverPreview.classList.add('opacity-0');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (!dot || !ring || window.innerWidth < 768) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function render() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  render();

  // Wave shockwave effect on click
  window.addEventListener('click', (e) => {
    const wave = document.createElement('div');
    wave.className = 'cursor-wave';
    wave.style.left = `${e.clientX}px`;
    wave.style.top = `${e.clientY}px`;
    document.body.appendChild(wave);

    setTimeout(() => wave.remove(), 600);
  });

  // Hide cursor completely when hovering project rows or links
  const hideTargets = document.querySelectorAll('.project-row, a');
  hideTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hidden'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hidden'));
  });

  // Scale ring for remaining interactive elements (buttons, inputs, etc.)
  const interactables = document.querySelectorAll('button, [role="button"], input');
  interactables.forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover-active'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover-active'));
  });
});