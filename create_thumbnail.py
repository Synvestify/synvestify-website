import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch
import numpy as np

# Create figure with a gradient background
fig, ax = plt.subplots(1, 1, figsize=(16, 9), dpi=100)

# Set background gradient
gradient = np.linspace(0, 1, 256).reshape(1, -1)
gradient = np.vstack((gradient,) * 256)
ax.imshow(gradient, extent=[0, 10, 0, 5.625], aspect='auto', cmap='Blues', alpha=0.3)

# Set background color
fig.patch.set_facecolor('#ffffff')
ax.set_facecolor('#f8fafc')

# Remove axes
ax.set_xlim(0, 10)
ax.set_ylim(0, 5.625)
ax.axis('off')

# Define colors (matching Synvestify brand)
primary_blue = '#2563EB'
dark_blue = '#1e40af'
light_blue = '#dbeafe'
slate_gray = '#64748b'
accent = '#f59e0b'

# Title
ax.text(5, 4.8, 'The Synvestify Model', 
        fontsize=48, weight='bold', ha='center', color='#1e293b',
        fontfamily='serif')

ax.text(5, 4.3, 'Synchronizing Your Investments', 
        fontsize=24, ha='center', color=slate_gray,
        fontfamily='sans-serif', style='italic')

# Central concept: 4 pillars around a center point
center_x, center_y = 5, 2.5
radius = 1.2

# Pillar positions (top, right, bottom, left)
pillars = [
    {'pos': (center_x, center_y + radius + 0.3), 'label': 'Mutual Funds', 'color': primary_blue},
    {'pos': (center_x + radius + 0.3, center_y), 'label': 'Tax Planning', 'color': primary_blue},
    {'pos': (center_x, center_y - radius - 0.3), 'label': 'Insurance', 'color': primary_blue},
    {'pos': (center_x - radius - 0.3, center_y), 'label': 'Retirement', 'color': primary_blue},
]

# Draw central circle
center_circle = Circle((center_x, center_y), 0.4, color=dark_blue, zorder=5)
ax.add_patch(center_circle)
ax.text(center_x, center_y, 'YOU', fontsize=14, weight='bold', 
        ha='center', va='center', color='white', zorder=6)

# Draw pillars and connecting lines
for i, pillar in enumerate(pillars):
    x, y = pillar['pos']
    
    # Draw line from center to pillar
    ax.plot([center_x, x], [center_y, y], color=light_blue, linewidth=3, zorder=1)
    
    # Draw pillar circle
    pillar_circle = Circle((x, y), 0.35, color=pillar['color'], zorder=4)
    ax.add_patch(pillar_circle)
    
    # Add label
    ax.text(x, y, pillar['label'][:3], fontsize=11, weight='bold',
            ha='center', va='center', color='white', zorder=5, fontfamily='sans-serif')
    
    # Add full label below
    ax.text(x, y - 0.6, pillar['label'], fontsize=12, weight='600',
            ha='center', va='top', color=primary_blue, fontfamily='sans-serif')

# Bottom tagline
ax.text(5, 0.4, '🎯 Personalized | 📊 Coordinated | 🚀 Results-Driven', 
        fontsize=14, ha='center', color=slate_gray, weight='600',
        fontfamily='sans-serif')

plt.tight_layout(pad=0)
plt.savefig('public/images/synvestify-model-thumbnail.png', 
            dpi=100, bbox_inches='tight', facecolor='white', edgecolor='none')
print("✅ Thumbnail created successfully!")
print("📁 Location: public/images/synvestify-model-thumbnail.png")
plt.close()
