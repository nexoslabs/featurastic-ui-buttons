import './styles/buttons.css';

document.addEventListener('DOMContentLoaded', () => {
  // Find all buttons with the class 'fui-btn'
  const buttons = document.querySelectorAll('.fui-btn');

  buttons.forEach(button => {
    // Add default styles glow
    const FuiGlow = document.createElement('span');
    FuiGlow.classList.add('fui-btn-glow');
    button.appendChild(FuiGlow);

    // Apply color based on the `data-variant` attribute
    const variant = button.getAttribute('data-variant') || 'primary';
    if (variant) {
      setTheme(button, variant);
    }

    // Apply ripple effect based on `data-ripple` attribute
    const ripple = button.getAttribute('data-ripple');
    if (ripple === 'true') {
      const FuiRipple = document.createElement('span');
      FuiRipple.classList.add('fui-btn-ripple');
      button.appendChild(FuiRipple);
    }
  });
});

// Color variables for different button types
const buttonColors = {
  primary: { background: '180, 100%, 50%', color: '180, 100%, 60%', glow: '180, 100%, 40%' },
  secondary: { background: '338, 99%, 50%', color: '338, 99%, 60%', glow: '338, 100%, 40%' },
  success: { background: '111, 100%, 50%', color: '111, 100%, 60%', glow: '111, 100%, 40%' },
  error: { background: '0, 100%, 50%', color: '0, 100%, 60%', glow: '0, 100%, 40%' },
  netural: { background: '0, 0%, 50%', color: '0, 0%, 60%', glow: '0, 0%, 40%' },
  default: { background: '0, 0%, 50%', color: '0, 0%, 60%', glow: '0, 0%, 40%' },
};

// Function to add color to the button based on `data-variant`
function setTheme(button, variant) {
  const color = buttonColors[variant] || buttonColors.default;

  button.style.setProperty(`--fui-btn-bg`, `${color.background}`);
  button.style.setProperty(`--fui-btn-color`, `${color.color}`);
  button.style.setProperty(`--fui-btn-glow`, `${color.glow}`);
}