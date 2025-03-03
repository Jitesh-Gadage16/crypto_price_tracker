"use client";

const RefreshButton = ({ onRefresh }: { onRefresh: () => void }) => {
    return (
        <button onClick={onRefresh} className="refresh-button">
            🔄 Refresh Prices
        </button>
    );
};

export default RefreshButton;
