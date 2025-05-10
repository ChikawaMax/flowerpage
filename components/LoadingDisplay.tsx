export function LoadingDisplay({ text = '' }: { text?: string }) {
  return (
    <div className="my-10 flex items-center justify-center">
      {text}読み込み中...
    </div>
  );
}
