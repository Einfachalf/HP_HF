// pages/chat/ChatComponent.tsx
const { messages, input, handleInputChange, handleSubmit } = useChat();

// pages/chat/ChatComponent.tsx
<div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
{messages.length > 0 ? messages.map(m => ( ... )) : null}
</div>
