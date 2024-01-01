const RadioIcon = ({ selected }: { selected: boolean }) => {
  return (
    <>
      {selected ? (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.41504"
            y="3.41504"
            width="25.17"
            height="25.17"
            rx="12.585"
            fill="white"
          />
          <rect
            x="3.41504"
            y="3.41504"
            width="25.17"
            height="25.17"
            rx="12.585"
            stroke="#0CAC67"
            stroke-width="1.5"
          />
          <circle cx="16" cy="16" r="8.335" fill="#0CAC67" />
        </svg>
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.335 28.67C9.53133 28.67 4 23.1387 4 16.335C4 9.53133 9.53133 4 16.335 4C23.1387 4 28.67 9.53133 28.67 16.335C28.67 23.1387 23.1387 28.67 16.335 28.67Z"
            stroke="#818181"
            stroke-width="2"
          />
        </svg>
      )}
    </>
  );
};

export default RadioIcon;
