import styled from "styled-components";

export const StyleTechnologies = styled.section`
    width: 100%;
    height: calc(100vh - var(--header-height));
    background: #020617;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .technologies-container {
        width: 100%;
        max-width: 1280px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .technologies-content {
        width: 100%;
        max-width: 1152px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 64px;
    }

    .technologies-header {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 13px;
    }

    .technologies-title {
        margin: 0;
        color: #60A5FA;
        text-align: center;
        font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 48px;
        font-weight: 700;
        line-height: 48px;
    }

    .technologies-description {
        margin: 0;
        color: #94A3B8;
        text-align: center;
        font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        max-width: 768px;
    }

    .technologies-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
    }

    .tech-card {
        display: flex;
        flex-direction: column;
        padding: 33px;
        border-radius: 16px;
        border: 1px solid #334155;
        background: rgba(30, 41, 59, 0.50);
        transition: all 0.3s ease;

        &:hover {
            border-color: #475569;
            background: rgba(30, 41, 59, 0.70);
            transform: translateY(-4px);
        }
    }

    .tech-icon {
        width: 64px;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        border-radius: 16px;
        margin-bottom: 24px;
        box-sizing: border-box;

        &.factory-io {
            background: linear-gradient(135deg, #F97316 0%, #EF4444 70.71%);
        }

        &.tia-portal {
            background: linear-gradient(135deg, #2563EB 0%, #4F46E5 70.71%);
        }

        &.react {
            background: linear-gradient(135deg, #06B6D4 0%, #3B82F6 70.71%);
        }

        &.nodejs {
            background: linear-gradient(135deg, #22C55E 0%, #10B981 70.71%);
        }

        &.siemens-plc {
            background: linear-gradient(135deg, #A855F7 0%, #EC4899 70.71%);
        }

        &.pixel-art {
            background: linear-gradient(135deg, #EAB308 0%, #F97316 70.71%);
        }

        svg {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }
    }

    .tech-title {
        margin: 0 0 12px 0;
        color: #FFF;
        font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 600;
        line-height: normal;
    }

    .tech-description {
        margin: 0;
        color: #CBD5E1;
        font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
    }

    @media (max-width: 1200px) {
        padding: 80px 60px;

        .technologies-grid {
            gap: 24px;
        }
    }

    @media (max-width: 1024px) {
        padding: 64px 40px;

        .technologies-content {
            gap: 48px;
        }

        .technologies-header {
            padding: 0 80px;
        }

        .technologies-title {
            font-size: 40px;
            line-height: 40px;
        }

        .technologies-description {
            font-size: 18px;
            line-height: 26px;
        }

        .technologies-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
        }
    }

    @media (max-width: 768px) {
        padding: 48px 24px;

        .technologies-content {
            gap: 40px;
        }

        .technologies-header {
            padding: 0 40px;
        }

        .technologies-title {
            font-size: 32px;
            line-height: 36px;
        }

        .technologies-description {
            font-size: 16px;
            line-height: 24px;
        }

        .technologies-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .tech-card {
            padding: 24px;
        }

        .tech-icon {
            width: 56px;
            height: 56px;
            padding: 14px;
            margin-bottom: 20px;
        }

        .tech-title {
            font-size: 18px;
            margin-bottom: 10px;
        }

        .tech-description {
            font-size: 15px;
        }
    }

    @media (max-width: 640px) {
        padding: 40px 20px;

        .technologies-content {
            gap: 32px;
        }

        .technologies-header {
            padding: 0 20px;
        }

        .technologies-title {
            font-size: 28px;
            line-height: 32px;
        }

        .technologies-description {
            font-size: 15px;
            line-height: 22px;
        }

        .tech-card {
            padding: 20px;
        }
    }

    @media (max-width: 480px) {
        padding: 32px 16px;

        .technologies-header {
            padding: 0;
        }

        .technologies-title {
            font-size: 24px;
            line-height: 28px;
        }

        .technologies-description {
            font-size: 14px;
            line-height: 20px;
        }

        .tech-icon {
            width: 48px;
            height: 48px;
            padding: 12px;
        }
    }
`;
