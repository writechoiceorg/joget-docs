import React from 'react';
import '../../css/HomeBtn.css';
import { ArrowRight } from '@phosphor-icons/react';
export default function HomeBtn({ text, btnClass }) {
  return (
    <button className={btnClass}>
      <h4>{text}</h4>
      <ArrowRight size={16} />
    </button>
  );
}
