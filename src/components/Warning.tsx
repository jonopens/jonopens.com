type WarningProps = {
  text: string,
}

export default function Warning({ text }: WarningProps) {
  return (
    <div className="flex items-center px-4 text-sm text-orange-800 border border-orange-300 rounded-lg bg-orange-50" role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Z"/>
      </svg>
      <p>{text}</p>
    </div>
  );
};
