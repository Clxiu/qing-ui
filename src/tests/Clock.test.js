import { render, screen, act, waitFor } from '@testing-library/react';
import React from 'react';
import Clock from '../components/Clock/Clock';

jest.setTimeout(20000); // 将超时时间设置为 20 秒钟

describe('Clock', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should render the current time', () => {
        const currentTime = new Date('2022-02-20T00:00:00');
        jest.spyOn(global, 'Date').mockImplementation(() => currentTime);

        render(<Clock />);

        expect(screen.getByTestId('digital')).toHaveTextContent('00:00:00');

        global.Date.mockRestore();
    });

    it('should update the time every second', async () => {
        render(<Clock />);
        const initialTime = screen.getByTestId('digital').textContent;

        jest.advanceTimersByTime(1000);

        await waitFor(() => {
            expect(screen.queryByText(initialTime)).not.toBeInTheDocument();
        }, { timeout: 15000 });
        
        expect(screen.getByTestId('digital')).not.toHaveTextContent(initialTime);
    });

    it('should rotate hands to correct angles based on time', () => {
        const date = new Date('2022-02-20T06:30:45');
        jest.spyOn(global, 'Date').mockImplementation(() => date);
        render(<Clock />);
        expect(screen.getByTestId('hour-hand')).toHaveStyle({ transform: `rotate(${195.5}deg)` });
        expect(screen.getByTestId('minute-hand')).toHaveStyle({ transform: `rotate(${180}deg)` });
        expect(screen.getByTestId('second-hand')).toHaveStyle({ transform: `rotate(${270}deg)` });
    });
    it('should render clock with correct initial state', () => {
        render(<Clock />);
        expect(screen.getByTestId('digital')).toHaveTextContent(new Date().toLocaleTimeString());
        expect(screen.getByTestId('hour-hand')).toHaveStyle({ transform: `rotate(${new Date().getHours() * 30 + new Date().getMinutes() * 0.5}deg)` });
        expect(screen.getByTestId('minute-hand')).toHaveStyle({ transform: `rotate(${new Date().getMinutes() * 6}deg)` });
        expect(screen.getByTestId('second-hand')).toHaveStyle({ transform: `rotate(${new Date().getSeconds() * 6}deg)` });
    });
      
});
