# Layout Shifting Optimizations

This document outlines the optimizations implemented to reduce Cumulative Layout Shift (CLS) and improve Core Web Vitals.

## Issues Identified

1. **Image Loading Without Proper Dimensions**
   - Images loading after page render causing layout shifts
   - Invisible placeholder images taking up space
   - Missing aspect ratio containers

2. **Font Loading**
   - Text reflow when fonts load
   - Missing font display strategies

3. **Dynamic Content Loading**
   - Content appearing after initial render
   - Missing space reservation for dynamic elements

4. **Responsive Design Issues**
   - Elements changing size on different screen sizes
   - Missing proper breakpoint handling

## Solutions Implemented

### 1. Font Optimization

**File: `app/layout.tsx`**
- Added `display: 'swap'` to font loading
- Added `preload: true` for critical fonts
- Prevents text reflow during font loading

### 2. Image Optimization

**File: `app/globals.css`**
- Added proper image styling with `max-width: 100%` and `height: auto`
- Added aspect ratio utilities (`.aspect-square`, `.aspect-video`)
- Added smooth transitions to reduce perceived layout shift

**Components Fixed:**
- `CRules.tsx`: Removed invisible image, added proper aspect ratio container
- `ZigZag.tsx`: Replaced invisible images with proper containers
- `Features.tsx`: Fixed background image layout shifting
- `Header.tsx`: Added proper dimensions for logo and sign images

### 3. Next.js Configuration

**File: `next.config.ts`**
- Added image optimization settings
- Configured WebP and AVIF formats
- Added device and image size configurations
- Enabled package import optimization

### 4. Performance Utilities

**File: `lib/performance.ts`**
- Image preloading utilities
- Aspect ratio calculations
- Debounce and throttle functions
- Core Web Vitals measurement
- Intersection Observer for lazy loading

### 5. Stable Image Component

**File: `components/ui/StableImage.tsx`**
- Custom image component with loading states
- Proper aspect ratio handling
- Smooth opacity transitions
- Prevents layout shift during image loading

## CSS Improvements

**File: `app/globals.css`**
```css
/* Prevent layout shift for images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Ensure proper aspect ratios */
.aspect-square {
  aspect-ratio: 1 / 1;
}

.aspect-video {
  aspect-ratio: 16 / 9;
}

/* Prevent layout shift for text elements */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin: 0;
}

/* Reserve space for dynamic content */
.content-placeholder {
  min-height: 1.2em;
}

/* Smooth transitions */
.layout-stable {
  transition: all 0.2s ease-in-out;
}
```

## Best Practices Implemented

1. **Always specify image dimensions**
   - Use `width` and `height` attributes
   - Use aspect ratio containers
   - Reserve space before images load

2. **Font loading strategy**
   - Use `font-display: swap`
   - Preload critical fonts
   - Provide fallback fonts

3. **Responsive design**
   - Use proper breakpoints
   - Maintain consistent spacing
   - Test on multiple screen sizes

4. **Performance monitoring**
   - Measure Core Web Vitals
   - Monitor CLS scores
   - Use performance budgets

## Testing

To test the optimizations:

1. **Lighthouse Audit**
   ```bash
   npm run build
   npm run start
   # Run Lighthouse audit
   ```

2. **Core Web Vitals**
   - Check CLS score in PageSpeed Insights
   - Monitor LCP and FID
   - Test on mobile devices

3. **Visual Testing**
   - Test on different screen sizes
   - Check for layout shifts during loading
   - Verify smooth transitions

## Monitoring

The `measureCoreWebVitals()` function in `lib/performance.ts` can be used to monitor:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## Future Improvements

1. **Lazy Loading**
   - Implement intersection observer for images
   - Add loading skeletons
   - Optimize critical rendering path

2. **Advanced Image Optimization**
   - Use responsive images with `srcset`
   - Implement art direction with `<picture>`
   - Add blur placeholders

3. **Animation Optimization**
   - Use `transform` instead of layout properties
   - Implement `will-change` for animations
   - Use `requestAnimationFrame` for smooth animations 