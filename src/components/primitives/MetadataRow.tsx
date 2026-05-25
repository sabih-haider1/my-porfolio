import React from 'react';

interface MetadataRowProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

const MetadataRow: React.FC<MetadataRowProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 text-sm text-muted-400 ${className}`}>
      <div className="font-medium text-gray-200 w-28">{label}</div>
      <div className="flex-1">{value}</div>
    </div>
  );
};

export default MetadataRow;
