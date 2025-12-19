import { useState } from 'react';

type CreateType = 'chat' | 'group' | 'community' | 'family' | 'friends';

interface CreateChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (data: { type: CreateType; name: string; description: string }) => void;
}

export default function CreateChatModal({ isOpen, onClose, onCreate }: CreateChatModalProps) {
    const [selectedType, setSelectedType] = useState<CreateType>('group');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate({ type: selectedType, name, description });
        onClose();
        setName('');
        setDescription('');
        setSelectedType('group');
    };

    const options = [
        { id: 'chat', label: 'New Chat', color: 'bg-teal-500', description: 'Start a direct message' },
        { id: 'group', label: 'New Group', color: 'bg-purple-600', description: 'Chat with friends & family' },
        { id: 'community', label: 'New Community', color: 'bg-orange-500', description: 'Build a large community' },
        { id: 'family', label: 'New Family Tree', color: 'bg-green-500', description: 'Connect with relatives' },
        { id: 'friends', label: 'New Friends Tree', color: 'bg-blue-500', description: 'Organize your circles' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white">Create New</h2>
                        <button onClick={onClose} className="text-zinc-400 hover:text-white">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setSelectedType(option.id as CreateType)}
                                className={`relative flex flex-col items-start p-4 rounded-xl border transition-all ${selectedType === option.id
                                        ? 'border-white/20 bg-zinc-800 ring-1 ring-white/20'
                                        : 'border-zinc-800 bg-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700'
                                    }`}
                            >
                                <div className={`w-full h-16 rounded-lg mb-3 ${option.color} opacity-90`} />
                                <span className={`text-sm font-semibold ${selectedType === option.id ? 'text-white' : 'text-zinc-300'}`}>
                                    {option.label}
                                </span>
                                {selectedType === option.id && (
                                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {selectedType !== 'chat' && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={`Enter ${selectedType} name...`}
                                        className="w-full rounded-xl bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1">Description (Optional)</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Add a short description..."
                                        rows={3}
                                        className="w-full rounded-xl bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                                    />
                                </div>
                            </>
                        )}

                        {selectedType === 'chat' && (
                            <div className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700 text-center text-zinc-400 text-sm">
                                Direct message selection will be implemented in the next step.
                            </div>
                        )}

                        <div className="pt-2 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={selectedType === 'chat' || !name}
                                className="px-6 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Create {selectedType.charAt(0).toUpperCase() + selectedType.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
