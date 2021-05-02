import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './RecommendationBadge.scss';

export default function RecommendationBadge() {
  return (
    <Badge variant="success" className="recommend-badge">Highly Recommend!</Badge>
  )
}