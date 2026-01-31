import { useState } from 'react';

type CreateType = 'group' | 'community' | 'family' | 'friends';

interface CreateGroupOrTreeProps {
    onClose: () => void;
    // We might need to adjust the onCreate signature or handle it internally/pass it up
    onCreate?: (data: { type: CreateType; name: string; description: string }) => void;
}

export default function CreateGroupOrTree({ onClose, onCreate }: CreateGroupOrTreeProps) {
    const [selectedType, setSelectedType] = useState<CreateType>('group');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate?.({ type: selectedType, name, description });
        onClose();
        setName('');
        setDescription('');
        setSelectedType('group');
    };

    const options = [
        {
            id: 'group',
            label: 'Create Group',
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
            ),
            description: 'Private chat with selected people',
        },
        {
            id: 'community',
            label: 'Create Community',
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            description: 'Topic-based space for many members',
        },
        {
            id: 'family',
            label: 'Create Family Tree',
            icon: (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h-3v-4h3v4zm3-10h-3V5h3v4z" />
                </svg>
            ),
            description: 'Connect and chat with family members',
        },
        {
            id: 'friends',
            label: 'Create Friends Tree',
            icon: (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.22-3.22-7.51-7.51 3.22 3.22 7.51z" />
                </svg>
            ),
            description: 'Friends connected through mutuals',
        },
    ];

    const getCtaText = (type: CreateType) => {
        switch (type) {
            case 'group': return 'Create Group';
            case 'community': return 'Create Community';
            case 'family': return 'Create Tree';
            case 'friends': return 'Create Tree';
            default: return 'Create';
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-white">Create New</h2>
                        <button onClick={onClose} className="text-zinc-400 hover:text-white">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-sm text-zinc-400 mb-4">What do you want to create?</p>

                    <div className="flex flex-col gap-3 mb-6">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setSelectedType(option.id as CreateType)}
                                className={`relative flex items-center w-full p-4 rounded-xl border transition-all text-left group ${selectedType === option.id
                                    ? 'border-indigo-500/50 bg-zinc-800 ring-1 ring-indigo-500/20'
                                    : 'border-zinc-800 bg-zinc-800/30 hover:bg-zinc-800/50 hover:border-zinc-700'
                                    }`}
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                                    {option.icon}
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className={`text-sm font-semibold ${selectedType === option.id ? 'text-white' : 'text-zinc-200'}`}>
                                        {option.label}
                                    </h3>
                                    <p className="text-xs text-zinc-400 mt-0.5">
                                        {option.description}
                                    </p>
                                </div>
                                {selectedType === option.id && (
                                    <div className="ml-4 h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={`Enter ${selectedType} name...`}
                                className="w-full rounded-[10px] bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-1">Description (Optional)</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Add a short description..."
                                rows={3}
                                className="w-full rounded-[10px] bg-zinc-800/50 border border-zinc-700 px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                            />
                        </div>

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
                                disabled={!name}
                                className="px-6 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {getCtaText(selectedType)}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
